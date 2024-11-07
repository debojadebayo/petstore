import Pet from "./Pet";

const Results = ({ petList }) => {
  return (
    <div className="search">
      {!petList.length ? (
        <h1>No pets found</h1>
      ) : (
        petList.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
