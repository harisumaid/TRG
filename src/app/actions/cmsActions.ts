"use server";

import { AboutUs, Showcase, testimony } from "@/interface/trg";
import config from "./../../config/config";
const { cmsReadApiToken, cmsServerEndpoint } = config;

export async function getAbout(): Promise<{ data: AboutUs }> {
  try {    
    const res = await fetch(`${cmsServerEndpoint}/api/trg-about`, {
      headers: {
        Authorization: `Bearer ${cmsReadApiToken}`,
      },
    }).catch((err) => {
      console.log(err);
      return err;
    });

    const data = await res.json();
    // return Response.json({ data: data.data });
    return { data: data.data };
  } catch (error) {
    console.log(error);
    // return Response.json({ data: {} });
    return {
      data: {
        id: 123,
        attributes: { aboutDetails: "", aboutHeading: "", aboutImage: "" },
      },
    };
  }
}

export async function getShowcase(): Promise<{ data: Showcase[] }> {
  try {
    const res = await fetch(`${cmsServerEndpoint}/api/trg-showcases`, {
      headers: {
        Authorization: `Bearer ${cmsReadApiToken}`,
      },
    }).catch((err) => {
      console.log(err);
      return err;
    });

    const data = await res.json();
    // return Response.json({ data: data.data });
    return { data: data.data };
  } catch (error) {
    console.log(error);
    // return Response.json({ data: [] });
    return { data: [] };
  }
}

export async function getStatic() {
  try {
    const res = await fetch(`${cmsServerEndpoint}/api/trg-static`, {
      headers: {
        Authorization: `Bearer ${cmsReadApiToken}`,
      },
    }).catch((err) => {
      console.log(err);
      return err;
    });

    const data = await res.json();
    // return Response.json({ data: data.data });
    return { data: data.data };
  } catch (error) {
    console.log(error);
    // return Response.json({ data: [] });
    return { data: [] };
  }
}

export async function getTestimony(): Promise<{ data: testimony[] }> {
  try {
    const res = await fetch(`${cmsServerEndpoint}/api/trg-testimonies`, {
      headers: {
        Authorization: `Bearer ${cmsReadApiToken}`,
      },
    }).catch((err) => {
      console.log(err);
      return err;
    });

    const data = await res.json();
    // return Response.json({ data: data.data });
    return { data: data.data };
  } catch (error) {
    console.log(error);
    // return Response.json({ data: [] });
    return { data: [] };
  }
}
