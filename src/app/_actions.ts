"use server"

import { redirect } from "next/navigation"

export const updateFilters = async (formData: FormData) => {
  const projectTypeFilters = formData.getAll("project_type[]")

  if (projectTypeFilters.length > 0) {
    const params = new URLSearchParams([
      ["project_type", projectTypeFilters.join(",")],
    ])

    redirect(`/?${params}`)
  }
  redirect("/")
}
