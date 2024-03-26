import React from 'react';
import { Typography, Paper, Divider, Button, Card, CardContent } from '@mui/material';

const AboutPage = () => {
  return (
    <div className="container mt-5">
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Paper elevation={3} className="p-3 mb-3">
        <Typography paragraph>
          Welcome to our historic old book and leather parchment factory, where the echoes of the past resonate in every
          page. Nestled in the heart of tradition, our factory stands as a testament to the artistry of bookmaking and
          the craftsmanship of leather parchment production.
        </Typography>
        <Typography paragraph>
          Our journey began in a bygone era, where skilled artisans meticulously crafted manuscripts by hand, binding
          stories and knowledge within leather covers. Today, we continue this legacy, blending the charm of antiquity
          with modern techniques to create timeless works of literary art.
        </Typography>
        <Typography paragraph>
          As you navigate through the corridors of our factory, you'll witness the delicate process of transforming raw
          materials into masterpieces. From selecting the finest leather hides to employing age-old bookbinding
          techniques, every step in our production is a nod to history and tradition.
        </Typography>
        <Typography paragraph>
          Our factory, nestled amidst the whispers of history, is a sanctuary for bibliophiles and connoisseurs of fine
          leather goods. As you wander through the workshop, the aroma of leather and the sight of skilled artisans at
          work will transport you to a time when every book was a masterpiece and every parchment a canvas of
          imagination.
        </Typography>
        <Typography paragraph>
          Today, we honor the past while embracing modern innovations. Our commitment to excellence ensures that each
          creation bears the imprint of heritage, carrying forward the essence of those who laid the foundation of our
          craft.
        </Typography>
        <Typography>
          We hope you will not do what Lucifer tried to do.
        </Typography>
      </Paper>
      <Divider className="mb-3" />
      <Button variant="contained" color="primary" className="mb-3">
        Explore More
      </Button>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Special Offer
          </Typography>
          <Typography>
            Get a limited edition leather-bound book with every purchase above $100.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;
