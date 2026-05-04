"use client";

import { useRouter, useSearchParams } from "next/navigation";

const CourseSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e) => {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.push(`/courses?${params.toString()}`);
  };

  return (
    <input
      type="text"
      placeholder="Search courses..."
      onChange={handleSearch}
      className="border p-2 rounded w-72 mt-4"
    />
  );
};

export default CourseSearch;