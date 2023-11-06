import React, { useEffect, useState } from "react";
;

const Gallery = ({ searchResults }) => {

  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  
   const fetchData=() => {

      fetch(
        `https://pixabay.com/api/?key=40286468-5b23295b3f971a8fd228aa6a8&q=${!searchResults?"animal":searchResults}&image_type=photo&pretty=true`
      )
        .then((response) => response.json())
        .then((data) => {
          
      if(data.total===0){
        alert("not found")
      }else{
        
        setPhotos(data.hits);
      }
          console.log(data,"opopo")
        })
        .catch((error) => {
          console.log(error);
        });
    
  
   }

  useEffect(() => {
    
   fetchData()
     
      
    
  }, [photos]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPhotos = photos.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <section className="mt-6 sm:mt-12 md:mt-10 ">
        <div className="w-full mx-auto px-[16px] max-w-786px">
          {/* <div>
            <button
              onClick={() => Category("animal")}
              className=" border-teal-500 border-[2px] mr-[10px] hover:bg-teal-300 text-black font-bold py-2 px-4 rounded"
            >
              Home
            </button>
            <button
              onClick={() => Category("food")}
              className=" border-teal-500 border-[2px] hover:bg-teal-300 text-black font-bold py-2 px-4 rounded"
            >
              Food Collection
            </button>
          </div> */}
          <article className=" mr-0 ml-0">
            <h1 className="text-black font-semibold  text-[40px] mb-4 mx-auto text-center">
              Photo Gallery
            </h1>
          </article>
        </div>

        <section className="mr-0 ml-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1050px] m-auto">
            {currentPhotos.map((photo) => (
              <div key={photo.id}>
                <img src={photo.webformatURL} className="w-full h-auto " />
              </div>
            ))}
          </div>
        </section>

        {/* -----------Pagination Section------------ */}

        <section className="flex justify-center mt-6">
          {Array.from(
            { length: Math.ceil(photos.length / itemsPerPage) },
            (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`text-[#DD4124] cursor-pointer text-[18px] text-center font-semibold h-10 w-10 shadow-[0_3px_6px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.23)] m-[5px] pt-[5px] px-2.5 rounded-[50%] hover:bg-[#dd4124] hover:text-white ${
                  currentPage === index + 1 ? "bg-[#dd4124] text-white" : ""
                }`}
              >
                {index + 1}
              </button>
            )
          )}
        </section>
      </section>
    </>
  );
};

export default Gallery;
