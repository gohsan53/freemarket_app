$(document).on('turbolinks:load', ()=> {
  // 画像用のinputを生成する関数
  const buildFileField = (index)=> {
    const html = `<div data-index="${index}" class="sellFillOut__uploadBox">
                    <label class='sellFillOut__uploadBox__itemPhotos'>
                      <input class="uploadBox-file" type="file"
                      name="item[images_attributes][${index}][src]"
                      id="item_images_attributes_${index}_src"><br>
                      <i class='fas fa-camera uploadBox-icon'></i>
                      <p>ドラッグアンドドロップ<br>またはクリックしてファイルをアップロード</p>
                    </label>
                    <div class="uploadBox-remove">削除</div>
                  </div>`;
    return html;
  }

  // file_fieldのnameに動的なindexをつける為の配列
  let fileIndex = [1,2,3,4,5,6,7,8,9,10];

  $('#image-box').on('change', '.uploadBox-file', function(e) {
    // fileIndexの先頭の数字を使ってinputを作る
    $('#image-box').append(buildFileField(fileIndex[0]));
    fileIndex.shift();
    // 末尾の数に1足した数を追加する
    fileIndex.push(fileIndex[fileIndex.length - 1] + 1)
  });

  $('#image-box').on('click', '.uploadBox-remove', function() {
    $(this).parent().remove();
    // 画像入力欄が0個にならないようにしておく
    if ($('.uploadBox-file').length == 0) $('#image-box').append(buildFileField(fileIndex[0]));
  });
});