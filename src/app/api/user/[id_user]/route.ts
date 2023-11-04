import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id_user: string }} ) {
    const { id_user } = params;

    try {
        const user = await db.user.findUnique({
            where: {
                id: id_user,
            },
        });
        
        if (!user) {
            return NextResponse.json({ message: "User not found!" }, { status: 404 });
        }
        return NextResponse.json(user, { status: 200 });
    }
    catch (error) {
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
    }
}

export async function PUT(req: Request, { params }: { params: { id_user: string }} ) {
    const { id_user } = params;

    try {
        const body = await req.json();
        const { username, name, email, password, role} = body;

        if (!username || !name || !email || !password || !role) {
            return NextResponse.json({ message: "Username, email, password, role, and image are required!" }, { status: 400 });
        }

        const user = await db.user.update({
            where: {
                id: id_user,
            },
            data: {
                username: username,
                name: name,
                email: email,
                password: password,
                role: role,
            },
        });

        if (!user) {
            return NextResponse.json({ message: "User not found!" }, { status: 404 });
        }
        return NextResponse.json(user, { status: 200 });
    }
    catch (error) {
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: { params: { id_user: string }} ) {
    const { id_user } = params;

    try {
        const user = await db.user.delete({
            where: {
                id: id_user,
            },
        });

        if (!user) {
            return NextResponse.json({ message: "User not found!" }, { status: 404 });
        }

        return NextResponse.json({ message: "Delete User with id "+id_user+" Success", user}, { status: 200 });
    }
    catch (error) {
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
    }
}