async function getNotes() {
  // const db = new PocketBase('http://127.0.0.1:8090');
  // const result = await db.records.getList('notes');
  const res = await fetch('http://127.0.0.1:8090/api/collections/projects/records?page=1&perPage=30', { cache: 'no-store' });
  const data = await res.json();
  return data?.items as any[];
}

function Note({ note }: any) {
  const { id, name, technologies, description } = note || {};

  return (
      <div className="w-2/3 h-1/3 mt-10 m-auto flex align-items">
        <img src="/favicon.ico" alt="Next logo" className="w-1/3 h-1/3"/>
        <div className="ml-9">
          <p className="text-custom-green font-bold text-3xl">{name}</p>
          <p className="mt-5"><b className="text-custom-black">Technologies: </b>{technologies}</p>
          <p><b className="text-custom-black break-words">Descrpition: </b>{description}</p>
        </div>
      </div>
  );
}

export default async function NotesPage() {
  const notes = await getNotes();

  return(
    <div className="flex h-screen justify-center">
        <div className="w-2/3 h-full mt-8">
          <p className="flex justify-center mt-8 text-5xl text-custom-black font-bold">Projects</p>
          <div className="mt-16">
            {notes?.map((note) => {
              return <Note key={note.id} note={note} />;
            })}
          </div>
      </div>
      </div>
      
  );
}
