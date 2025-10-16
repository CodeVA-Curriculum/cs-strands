import { error } from "@sveltejs/kit"
import type { PageLoad } from './$types';

export const load:PageLoad = async ({ params }) => {
  const map = await (await fetch("https://curriculum.codevirginia.org/api/standards/course-strand-map.json")).json()
  const subjects = await (await fetch("https://curriculum.codevirginia.org/api/standards/subjects.json")).json()
  const abbreviations = []
  for(const [k,v] of Object.entries(subjects)) {
    abbreviations.push(k)
  }
  return {
    map: map,
    subjects: subjects,
    abbreviations: abbreviations
  }
  error(404, "Not found")
}

export const prerender = true;
