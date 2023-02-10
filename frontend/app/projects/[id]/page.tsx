async function getproject(projectId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/projects/records/${projectId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data;
}

export default async function projectPage({ params }: any) {
  const project = await getproject(params.id);

  return (
    <div className="flex h-screen justify-center">
        <div className="w-2/3 h-full mt-8">
          <p className="flex justify-center mt-8 text-5xl text-custom-green font-bold mb-10 dark:text-custom-cream">{project.name}</p>
          <div className="ml-9">
          <p><b className="text-custom-black break-words dark:text-custom-cream text-3xl">Descrpition <br/></b>{project.longdescription}</p>
          <p><b className="text-custom-black break-words dark:text-custom-cream text-3xl">Screenshots <br/></b>{project.longdescription}</p>
          <p><b className="text-custom-black break-words dark:text-custom-cream text-3xl">Download <br/></b>{project.longdescription}</p>
          <p><b className="text-custom-black break-words dark:text-custom-cream text-3xl">Technologies <br/></b>{project.technologies}</p>
        </div>
        </div>
    </div>
  );
}