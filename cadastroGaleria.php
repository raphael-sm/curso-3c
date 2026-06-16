<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastrar Galeria</title>
    <link rel="stylesheet" href="styles.css">
    <script src="sidebar.js" defer></script>
</head>
<body>
    <div class="overlay" id="overlay" onclick="closeSidebar()"></div>
    <?php
        include __DIR__ . '\snippets\header.html'
    ?>
    <main>
        <div class="gallery">
            <form action="galeria.php" method="POST" enctype="multipart/form-data">
                <fieldset>
                    <div id="previewContainer" class="preview-container"></div>
                    <div class="upload">
                        <h2>Enviar nova Galeria</h2><br>
                        <input type="file" accept="image/*" multiple id="imageInput" name="images[]"><br>
                        <label for="sel">Selecione o Evento Associado:</label><br>
                        <select id="sel" name="id_evento">
                            <?php
                                $con = mysqli_connect('localhost', 'root', '', 'projeto_final');
                                $sql = "SELECT id_evento, nome, DATE(inicio) FROM evento";
                                $exe = mysqli_query($con, $sql);
                                while ($res = mysqli_fetch_array($exe)){
                                    echo "<option value=".$res['id_evento'].">".$res['nome']."</option>";
                                }
                                mysqli_close($con)
                            ?>
                        </select><br>
                        <label for="desc">Descrição(Opcional):</label><br>
                        <textarea id="desc" cols="33" class="descfield" maxlength="600" rows="6" name="descricao"></textarea><br>
                        <input type="submit" class="lgnbtn">
                    </div>
                </fieldset>
            </form>
        </div>
        <script>
            const imageInput = document.getElementById('imageInput');
            const previewContainer = document.getElementById('previewContainer');
            
            imageInput.addEventListener('change', function () {
                previewContainer.innerHTML = '';
            
                const files = Array.from(this.files);
                const maxPreviews = 3;
            
                files.slice(0, maxPreviews).forEach(file => {
                    const img = document.createElement('img');
                    img.src = URL.createObjectURL(file);
                    img.classList.add('preview-image');
                    previewContainer.appendChild(img);
                });
            
                if (files.length > maxPreviews) {
                    const moreDiv = document.createElement('div');
                    moreDiv.classList.add('more-images');
                    moreDiv.textContent = `+ ${files.length - maxPreviews}`;
                    previewContainer.appendChild(moreDiv);
                }
            });
            </script>
</body>
</html>