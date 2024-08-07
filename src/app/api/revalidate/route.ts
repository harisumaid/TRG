import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");

  if (path) {
    revalidatePath(path, "layout");
    return Response.json({ revalidated: true, now: Date.now() });
  }

  return Response.json(
    {
      revalidated: false,
      now: Date.now(),
      message: "Path not specified",
    },
    {
      status: 400,
    }
  );
}

export async function POST(request: NextRequest) {
    const path = request.nextUrl.searchParams.get("path");
  
    if (path) {
      revalidatePath(path, "layout");
      return Response.json({ revalidated: true, now: Date.now() });
    }
  
    return Response.json(
      {
        revalidated: false,
        now: Date.now(),
        message: "Path not specified",
      },
      {
        status: 400,
      }
    );
  }