'use strict'
import JsZip from 'jszip'
import fileSaver, { saveAs } from 'file-saver'
export default class Download {
  constructor() {
    this.zip = new JsZip()
  }

  // 单文件下载
  static downloadSingleFile(content, fileName, option) {
    let blob = new Blob([content], option)
    fileSaver.saveAs(blob, fileName)
  }

  /**
   * 根据文件下载
   * @param content 字符串/流
   * @param fileName 文件名称
   */
  static downloadOfStr(content, fileName) {
    return new Promise(resolve => {
      let ele = document.createElement('a')
      ele.download = fileName
      ele.style.display = 'none'
      let blob = new Blob([content])
      ele.href = URL.createObjectURL(blob)
      document.body.appendChild(ele)
      ele.click()
      document.body.removeChild(ele)
      resolve()
    })
  }

  /**
   * 根据链接下载
   * @param href  链接
   * @param title 名称
   */
  static downloadOfLink(href, title) {
    const a = document.createElement('a')
    a.setAttribute('href', href)
    a.setAttribute('download', title)
    a.click()
  }

  // 添加文件到zip
  addFileInZip(fileName, content, option) {
    this.zip.file(fileName, content, option)
  }

  // 添加文件夹到zip
  addFolderInZip(folderName) {
    return this.zip.folder(folderName)
  }

  // 打包成blob（二进制数据）
  packageZip2blob() {
    return this.zip.generateAsync({ type: 'blob' })
  }

  // 打包并下载(默认打包成blob)
  packageZipAndDownload(zipName, type = 'blob') {
    this.zip.generateAsync({ type }).then(content => {
      saveAs(content, zipName)
    })
  }
}