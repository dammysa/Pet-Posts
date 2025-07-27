import { connect } from "@/utils/connect";

export async function POST(request) {
  try {
    const db = connect();
    const { userId, bio } = await request.json();

    console.log("Bio update through API");

    const result = await db.query(
      `UPDATE users SET bio = $1 WHERE id = $2 RETURNING *`,
      [bio, userId]
    );

    return Response.json({ message: "Bio updated", user: result.rows[0] });
  } catch (e) {
    console.error("ERROR UPDATING BIO:", e.message);
    return Response.json({ error: e.message }, { status: 500 });
  }
}
