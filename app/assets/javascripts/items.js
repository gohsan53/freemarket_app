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

  const buildImg = (index, url)=> {
    
  }

  // file_fieldのnameに動的なindexをつける為の配列
  let fileIndex = [1,2,3,4,5,6,7,8,9,10];
  // 既に使われているindexを除外
  lastIndex = $('.sellFillOut__uploadBox:last').data('index');
  fileIndex.splice(0, lastIndex);
  // $('.hidden-destroy').hide();
  $('#image-box').on('change', '.uploadBox-file', function(e) {
    // fileIndexの先頭の数字を使ってinputを作る
    $('#image-box').append(buildFileField(fileIndex[0]));
    fileIndex.shift();
    // 末尾の数に1足した数を追加する
    fileIndex.push(fileIndex[fileIndex.length - 1] + 1)
  });

  $('#image-box').on('click', '.uploadBox-remove', function() {
    const targetIndex = $(this).parent().data('index')
    // 該当indexを振られているチェックボックスを取得する
    const hiddenCheck = $(`input[data-index="${targetIndex}"].hidden-destroy`);
    // もしチェックボックスが存在すればチェックを入れる
    if (hiddenCheck) hiddenCheck.prop('checked', true);
    $(this).parent().remove();
    // 画像入力欄が0個にならないようにしておく
    if ($('.uploadBox-file').length == 0) $('#image-box').append(buildFileField(fileIndex[0]));
  });
});