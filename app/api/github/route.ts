import { fetchDataForAllYears } from "../../utils/github";
export async function GET() {
	const data = await fetchDataForAllYears("konyan", "");

	return Response.json({ data });
}
