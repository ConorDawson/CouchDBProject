document.addEventListener('DOMContentLoaded', () => {
    const db = new PouchDB('localdb');
    
    document.getElementById('submitDoc').addEventListener('click', () => {
        const docId = document.getElementById('docId').value;
        const docIndex = parseInt(document.getElementById('docIndex').value, 10);
        const docBookName = document.getElementById('docBookName').value;
        const docAuthor = document.getElementById('docAuthor').value;
        const docRating = parseFloat(document.getElementById('docRating').value);
        const docNumberOfVotes = parseInt(document.getElementById('docNumberOfVotes').value, 10);
        const docScore = parseInt(document.getElementById('docScore').value, 10);
        
        const doc = {
            _id: docId,
            Index: docIndex,
            'Book Name': docBookName,
            Author: docAuthor,
            Rating: docRating,
            'Number of Votes': docNumberOfVotes,
            Score: docScore
        };

        db.put(doc).then(response => {
            alert('Document added successfully');
            window.location.href = 'index.html';
        }).catch(err => {
            alert('Error adding document: ' + err);
        });
    });
});
