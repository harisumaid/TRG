import config from "./../../../config/config";
const { cmsReadApiToken, cmsServerEndpoint } = config;

export async function GET(request: Request){
    const res = await fetch(`${cmsServerEndpoint}/api/about`,{
        headers:{
            "Authorization": `Bearer ${cmsReadApiToken}`
        }
    }).catch(err=>{
        console.log(err);
        return err;
    });

    const data = await res.json();
    return Response.json({ data: data.data });
}