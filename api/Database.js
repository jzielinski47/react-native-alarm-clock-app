import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("zielinski_jakub_4i1b.db");

const tableName = 'table'

export class Database {

    static createTable = () => db.transaction(tx =>
        tx.executeSql(`CREATE TABLE IF NOT EXISTS ${tableName} (id integer primary key not null, hour text, minute text, active INTEGER);`));

    static add = (hour, minute, active) => db.transaction(tx => tx.executeSql(`INSERT INTO ${tableName} (hour, minute, active) values (${hour},${minute},${active})`));

    static getAll = () => {
        var query = `SELECT * FROM ${tableName}`;

        return new Promise((resolve, reject) => db.transaction((tx) => {
            tx.executeSql(query, [], (tx, results) => {

                console.log(JSON.stringify(results))

                resolve(JSON.stringify(results));

            }, (tx, error) => reject(error));
        }))

    }

    static remove = (id) => db.transaction(tx => tx.executeSql(`DELETE FROM ${tableName} WHERE (id = ${id});`));

    static removeAll() {

        db.transaction(tx => {
            tx.executeSql(`DELETE FROM ${tableName};`);
        });
    }



}