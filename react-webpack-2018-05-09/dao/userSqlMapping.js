/**
 * 用户有关的sql语句
 * @type {{insert: string, update: string, delete: string, queryById: string, queryAll: string}}
 */
var user = {
    insert: 'INSERT INTO user(id, name, age) VALUES(?,?,?)',
    update: 'update user set name=?, age=? where id=?',
    delete: 'delete from user where id=?',
    queryById: 'select * from user where id=?',
    queryAll: 'select * from user'
};

module.exports = user;