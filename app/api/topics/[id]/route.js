import connectMongoDB from "@/libs/mongdb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

// UPDATE BY ID
export async function PUT(request, { params }) {
    const resolvedParams = await params; // Await params
    const { id } = resolvedParams;
    const { newTitle: title, newDescription: description } = await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Updated" }, { status: 200 });
}

// GET by ID
export async function GET(request, { params }) {
    const resolvedParams = await params; // Await params/// different 
    const { id } = resolvedParams;
    await connectMongoDB();
    const topic = await Topic.findOne({ _id: id });
    return NextResponse.json({ topic }, { status: 200 });
}
