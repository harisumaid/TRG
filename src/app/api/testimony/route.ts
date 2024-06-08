import config from "./../../../config/config";
const { cmsReadApiToken, cmsServerEndpoint } = config;

export async function GET(request: Request){
    try {
        const res = await fetch(`${cmsServerEndpoint}/api/testimonies`,{
            headers:{
                "Authorization": `Bearer ${cmsReadApiToken}`
            }
        }).catch(err=>{
            console.log(err);
            return err;
        });
    
        const data = await res.json();
        return Response.json({ data: data.data });   
    } catch (error) {
        console.log(error)
        return Response.json({ data: [] });
    }
}