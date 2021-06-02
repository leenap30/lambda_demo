exports.handler = async (event) => {
   var urls = ["https://youtu.be/EBSdyoO3goc",
                "https://youtu.be/su9VDwCrCos",
                "https://youtu.be/4L-mJc3XakU"];
    const response = {
        statusCode: 200,
        body: JSON.stringfy(urls),
    };
return response;
}
