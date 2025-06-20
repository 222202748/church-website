import React from 'react';

const Events = () => {
  return (
    <>
      <section className="bg-light py-5">
        <div className="container text-center">
          <h3 className="fw-bold">Upcoming Events</h3>
          <p>Get the latest insights, expert tips, and updates to stay informed and inspired.</p>
          <a href="#" className="btn btn-outline-dark">Events Calendar</a>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-3">
            {[
              { text: 'Cross', alt: 'Church Image 1' },
              { text: 'Bible', alt: 'Church Image 2' },
              { text: 'Bishop', alt: 'Church Image 3' },
              { text: 'Crucifix', alt: 'Church Image 4' }
            ].map((image, index) => (
              <div key={index} className="col-6 col-md-3">
                <img 
                  src={`https://via.placeholder.com/300x200?text=${image.text}`} 
                  className="img-fluid rounded" 
                  alt={image.alt} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;