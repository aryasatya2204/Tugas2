document.addEventListener('DOMContentLoaded', function() {
    // Buat root elemen di mana seluruh form dan output akan dimasukkan
    const root = document.getElementById('root');

    // Mengisi root dengan struktur HTML yang ada, menggunakan flexbox untuk tata letak horizontal
    root.innerHTML = `
        <h1>Tugas-2 Praktikum Pemrograman Web</h1>
        <div class="container">
            <form id="userForm" class="form-container">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Nama Anda">
                </div>
                <div class="form-group">
                    <label for="nim">NIM</label>
                    <input type="text" id="nim" name="nim" placeholder="NIM Anda">
                </div>
                <div class="form-group">
                    <label for="kom">KOM</label>
                    <input type="text" id="kom" name="kom" placeholder="KOM Anda">
                </div>
                <div class="form-group">
                    <label for="photo">Upload Photo</label>
                    <input type="file" id="photo" name="photo">
                </div>
                <button type="submit">Submit</button>
            </form>

            <div id="displayContainer" class="display-container" style="display:none;">
                <!-- Hasil dari form akan tampil di sini -->
            </div>
        </div>
    `;

    const alertBox = document.createElement('div');
    alertBox.className = 'alert-box';
    alertBox.innerHTML = `
        <p>Selamat datang di indomaret selamat belanja</p>
        <p>Silakan isi form di bawah.</p>
        <button id="alertOk">OK</button>
    `;
    document.body.appendChild(alertBox);

    document.getElementById('alertOk').addEventListener('click', function() {
        alertBox.style.display = 'none';
    });

    const form = document.getElementById('userForm');
    const photoInput = document.getElementById('photo');
    const displayContainer = document.getElementById('displayContainer');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const nim = document.getElementById('nim').value;
        const kom = document.getElementById('kom').value;
        const photo = photoInput.files[0];

        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        img.src = URL.createObjectURL(photo);
        img.alt = 'User Photo';
        img.style.maxWidth = '200px';
        img.style.maxHeight = '200px';

        const usernamePara = document.createElement('p');
        usernamePara.innerText = 'Username: ' + username;
        const nimPara = document.createElement('p');
        nimPara.innerText = 'NIM: ' + nim;
        const komPara = document.createElement('p');
        komPara.innerText = 'KOM: ' + kom;

        card.append(img, usernamePara, nimPara, komPara);
        displayContainer.innerHTML = '';
        displayContainer.appendChild(card);
        displayContainer.style.display = 'block';
        alert('Form berhasil disubmit!');
    });
});

