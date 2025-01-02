import { spawn } from 'child_process';
import { RootSrc } from './paths';

/**
 * 为给定的函数或类添加displayName属性
 *
 * @template T 代表任何对象类型
 * @param {string} name - 要添加的显示名称
 * @param {T} fn - 函数或类，将为其添加displayName属性
 * @returns {T} 返回添加了displayName属性的原始函数或类
 *
 * 此函数通过使用Object.assign将displayName属性添加到传入的函数或类中
 */
export const withTashName = <T extends object>(name: string, fn: T) => Object.assign(fn, { displayName: name });

/**
 * 异步执行命令行命令
 *
 * 该函数接受一个字符串形式的命令，然后使用该命令在指定的源代码根目录中执行一个子进程
 * 它等待命令执行完成，并在命令执行结束后解析Promise
 *
 * @param command 要执行的命令行命令，字符串形式
 * @returns 返回一个Promise，该Promise在命令执行结束后解析
 */
export const run = async (command: string) => {
    // 创建一个新的Promise对象
    return new Promise(resolve => {
        // 分解命令字符串为命令和参数
        const [cmd, ...args] = command.split(' ');

        // 使用spawn方法在指定的目录中执行命令
        const app = spawn(cmd, args, {
            cwd: RootSrc, // 设置当前工作目录为源代码根目录
            stdio: 'inherit', // 继承父进程的stdin, stdout和stderr
            shell: true // 使用shell执行命令
        });

        // 监听子进程的关闭事件，当子进程关闭时，解析Promise
        app.on('close', resolve);
        app.on('spawn', (data) => {
            console.log('spawn', data);
        });
    });
};
