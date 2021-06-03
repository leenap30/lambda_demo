exports.handler = async (event) => {
   
    var urls = ["https://youtu.be/embed/EBSdyoO3goc",
                "https://youtu.be/embed/su9VDwCrCos",
                "https://youtu.be/embed/4L-mJc3XakU"];
     const response = {
        statusCode: 200,
        body: JSON.stringify(urls),
    };
    return response;
};

