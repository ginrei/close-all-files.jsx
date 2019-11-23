/*
<javascriptresource>
<name>Close All Files</name>
<type>automate</type>
<about>Close All Files</about>
<enableinfo>true</enableinfo>
</javascriptresource>
*/


app.activeDocument.suspendHistory ('すべてのファイルを閉じる', 'main()')

function main () {

  alertDialog()

}

function closeAllDocuments () {
  var openingDocuments = app.documents
  var openingDocumentsCount = app.documents.length

  for (var i=openingDocumentsCount-1; i>=0; i--) {
    openingDocuments[i].close(SaveOptions.DONOTSAVECHANGES)
  }
}

function alertDialog (settings) {
  dlgMain = new Window('dialog', '全てのウィンドウを閉じる')

  dlgMain.grpTop = dlgMain.add('group')
  dlgMain.grpTop.alignChildren = 'top';
	dlgMain.grpTop.alignment = 'fill';

  dlgMain.grpTop.add('statictext', undefined, '全てのウィンドウを保存せずに閉じます');

  dlgMain.grpButtons = dlgMain.add('group');
	dlgMain.grpButtons.orientation = 'column';
  dlgMain.grpButtons.alignChildren = 'fill';

  dlgMain.btnOK = dlgMain.grpButtons.add('button', undefined, 'OK' )
  dlgMain.btnOK.onClick = function () {
    dlgMain.close()
    closeAllDocuments()
  }

  dlgMain.btnCancel = dlgMain.grpButtons.add('button', undefined, 'キャンセル' )
  dlgMain.btnCancel.onClick = function () {
		dlgMain.close()
  }
  
  app.bringToFront()
  dlgMain.center()

  var result = dlgMain.show()

}