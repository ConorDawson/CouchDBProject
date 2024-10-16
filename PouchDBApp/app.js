document.addEventListener('DOMContentLoaded', () => {
    const db = new PouchDB('localdb');
    const remoteDb = new PouchDB('http://admin:admin@127.0.0.1:5984/bookdb');
    
    const output = document.getElementById('output');
    
    document.getElementById('addDoc').addEventListener('click', () => {
        window.location.href = 'add.html';
    });

    document.getElementById('showAllDocs').addEventListener('click', () => {
        db.allDocs({ include_docs: true }).then(result => {
            showMessage(result.rows.map(row => row.doc));
        }).catch(err => {
            showMessage(err);
        });
    });

    document.getElementById('syncDb').addEventListener('click', () => {
        db.sync(remoteDb, {
            live: true,
            retry: true
        }).on('complete', info => {
            showMessage('Sync complete');
        }).on('error', err => {
            showMessage('Sync error: ' + err);
        });
    });

    function showMessage(message) {
        output.textContent = JSON.stringify(message, null, 2);
    }
});
