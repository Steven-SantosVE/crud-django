import axios from 'axios';
const BASE_URL = "http://127.0.0.1:8000";

export async function loadData() {
  try {
    const res = await axios.get(`${BASE_URL}/author`);
    console.log(res.data);
    return res.data;                    // ← important: return the data
  } catch (error) {
    console.error("Error fetching authors:", error);
    throw error;                        // so the component can catch it
  }
}

export async function deleteAuthor(idToDelete) {
  try {
    const res = await axios.delete(`${BASE_URL}/deleteAuthor/${idToDelete}/`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.error("Error deleting author:", err);
    throw err;
  }
}

export async function submitUpdateAuthor({ updateBio, idToUpdate, updateAuthor }) {
  try {
    const res = await axios.put(`${BASE_URL}/updateAuthor/${idToUpdate}/`, {
      name: updateAuthor,
      bio: updateBio,
    });
    console.log(res.data, "Author updated successfully");
    return res.data;
  } catch (err) {
    console.error("Error updating author:", err);
    throw err;
  }
}
    

export async function submitAuthor({ addAuthor, addBio }) {
  try {
    const res = await axios.post(`${BASE_URL}/addAuthor`, {
      name: addAuthor,
      bio: addBio,
    });
    console.log(res.data, "Author added successfully");
    return res.data;
  } catch (err) {
    console.error("Error adding author:", err);
    throw err;
  }
}