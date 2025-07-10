import React from 'react';

const ArticleCard = ({ image, date, title, description }) => (
  <div className="col-12 col-sm-6 col-lg-4 mb-4">
    <div className="card border-0">
      <div className="position-relative">
        <img src={image} className="card-img-top" alt={title} />
        <div className="date-badge">{date}</div>
        {title.includes('Challenges') && (
          <span className="play-btn">
          </span>
        )}
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">{description}</p>
      </div>
    </div>
  </div>
);

const Articles = () => {
  const articles = [
    {
      image: 'https://via.placeholder.com/600x400?text=Church+1',
      date: '17 DEC',
      title: 'Impacting Lives: Stories of Faith in Action',
      description: 'Discover powerful stories of faith in action, where belief and compassion come together to make a lasting impact on lives and communities.'
    },
    
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="fw-bold">Read Our Latest Articles</h3>
          <p className="text-muted">Subscribe to our blog for the latest posts and insights!</p>
        </div>
        <div className="row g-4">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;