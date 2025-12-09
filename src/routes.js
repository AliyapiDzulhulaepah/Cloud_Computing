const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  // ====================================================
  // 1. Menyimpan catatan baru (POST /notes)
  // ====================================================
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },

  // 2. Menampilkan semua catatan (GET /notes)
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },

  // ====================================================
  // 3. Menampilkan catatan berdasarkan ID (GET /notes/{id})
  // ====================================================
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },

  // ====================================================
  // 4. Mengubah catatan (PUT /notes/{id})
  // ====================================================
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },

  // ====================================================
  // 5. Menghapus catatan (DELETE /notes/{id})
  // ====================================================
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;