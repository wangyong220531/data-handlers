const fs = require("fs")
const { wyDeepClone } = require("wangyong-utils")

fs.readFile("./solicitation.json", "utf8", (err, dataSrc) => {
    if (err) return console.log("读取文件错误！" + err.msg)
    const dataCopy = wyDeepClone(dataSrc)
    const handleResult = JSON.parse(dataCopy).map(item => {
        return {
            title: item.title,
            link_id: "",
            project_name: "",
            project_no: "",
            project_principal: "",
            principal_contact: "",
            budget: "",
            principal_unit: "",
            submission_time: "",
            remark: ""
        }
    })
    fs.writeFile(__dirname + "/result.json", JSON.stringify(handleResult), err => {
        err ? console.log("文件写入失败！" + err.message) : console.log("文件写入成功！")
    })
})
