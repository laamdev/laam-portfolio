"use server"

import { redirect } from "next/navigation"

export const updateFilters = async (formData: FormData) => {
  const projectCategoryFilters = formData.getAll("project_category[]")

  if (projectCategoryFilters.length > 0) {
    const params = new URLSearchParams([
      ["project_category", projectCategoryFilters.join(",")],
    ])

    redirect(`/?${params}`)
  }
  redirect("/")
}
