import React from "react";
import styled from "styled-components";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  Grid,
  Avatar
} from "@mui/material";
import NavBar from "../components/nav/NavBar";
import SimpleMap from "../components/Map";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import pawan from "../assets/pawan.png";
import sp from "../assets/sp.png";

const Header = styled.div`
  background: linear-gradient(135deg, #2196f3, #1565c0);
  color: white;
  text-align: center;
  padding: 50px 20px;
  border-bottom: 5px solid #0d47a1;
`;

const StyledContainer = styled(Container)`
  margin: 20px auto;
  padding: 40px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Section = styled(Box)`
  margin-bottom: 40px;
`;

const HighlightCard = styled(Card)`
  margin: 20px 0;
  border-left: 5px solid #1565c0;
`;

const TeamAvatar = styled(Avatar)`
  width: 280px !important;
  height: 280px !important;
  margin: auto;
`;

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <Announcement />
      <Header style={{ marginTop: "55px" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Guru Nanak Gramodhyog Sewa Sansthan
        </Typography>
        <Typography variant="h6" component="p">
          Empowering Communities Through Sustainable Manufacturing Since 1978
        </Typography>
      </Header>

      <StyledContainer maxWidth="lg">
        {/* Welcome Section */}
        <Section>
          <Typography variant="h4" component="h2" gutterBottom>
            Welcome!
          </Typography>
          <Typography variant="body1">
            Guru Nanak Gramodhyog Sewa Sansthan is a 46-year-old society
            dedicated to fostering sustainable manufacturing and community
            development. Established in 1978, we specialize in producing
            high-quality detergents and cleaning solutions for households and
            businesses, prioritizing affordability, quality, and innovation.
          </Typography>
        </Section>

        {/* Organization Details Section */}
        <Section>
          <Typography variant="h4" component="h2" gutterBottom>
            Organization Details
          </Typography>
          <HighlightCard>
            <CardContent>
              <Typography variant="body1" paragraph>
                <strong>Name:</strong> Guru Nanak Gramodhyog Sewa Sansthan
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Type:</strong> Society
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Activity:</strong> Manufacturing (Micro Enterprise)
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Social Category:</strong> General
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Address:</strong> 00715, Manpur Rajja, Nagina Road,
                Dhampur, Uttar Pradesh, 246761
              </Typography>
            </CardContent>
          </HighlightCard>
        </Section>

        {/* Mission Section */}
        <Section>
          <Typography variant="h4" component="h2" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1">
            To revolutionize the manufacturing of cleaning and detergent
            products with a focus on quality, affordability, and sustainability.
            We aim to uplift communities by creating jobs and promoting
            eco-friendly practices.
          </Typography>
        </Section>

        {/* Team Section */}
        <Section>
          <Typography variant="h4" component="h2" gutterBottom>
            Meet Our Team
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4} md={6}>
              <TeamAvatar src={sp} alt="Team Member" />
              <Typography variant="h6" align="center" gutterBottom>
                SP Saluja
              </Typography>
              <Typography variant="body2" align="center">
                Founder & CEO
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TeamAvatar src={pawan} alt="Team Member" />
              <Typography variant="h6" align="center" gutterBottom>
                Pawan Saluja
              </Typography>
              <Typography variant="body2" align="center">
                Head of Operations
              </Typography>
            </Grid>
            {/* <Grid item xs={12} sm={6} md={4}>
              <TeamAvatar src="https://via.placeholder.com/150" alt="Team Member" />
              <Typography variant="h6" align="center" gutterBottom>
                Sagun
              </Typography>
              <Typography variant="body2" align="center">
                Tech Lead
              </Typography>
            </Grid> */}
          </Grid>
        </Section>

        <Section>
          <Typography variant="h4" component="h2" gutterBottom>
            Testimonials
          </Typography>

          <HighlightCard>
            <CardContent>
              <Typography variant="body1" paragraph>
                The quality of their products is unmatched. It’s amazing to see
                an organization so dedicated to sustainable manufacturing. -
                <strong>Ankita Singh</strong>, Customer
              </Typography>
            </CardContent>
          </HighlightCard>

          <HighlightCard>
            <CardContent>
              <Typography variant="body1" paragraph>
                Guru Nanak Gramodhyog Sewa Sansthan has been a reliable partner
                for all our cleaning needs. Their commitment to excellence and
                affordability is commendable. - <strong>Rohit Mehra</strong>,
                Business Owner
              </Typography>
            </CardContent>
          </HighlightCard>

          <HighlightCard>
            <CardContent>
              <Typography variant="body1" paragraph>
                I’ve been using their products for years, and they never
                disappoint. Highly recommended for anyone looking for quality
                and sustainability. - <strong>Priya Sharma</strong>, Homemaker
              </Typography>
            </CardContent>
          </HighlightCard>
        </Section>

        {/* Contact Us */}
        <Section>
          <Typography variant="h4" component="h2" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body1">
            Have any questions or want to know more about our products? Reach
            out to us today at{" "}
            <a href="mailto:info@gngss.org">info@gngss.org</a> or call us at{" "}
            <strong>+91-123-456-7890</strong>.
          </Typography>
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              href="mailto:info@gngss.org"
              sx={{ textTransform: "none", borderRadius: 8 }}
            >
              Contact Us
            </Button>
          </Box>
        </Section>

        <Section>
          <SimpleMap />
        </Section>
      </StyledContainer>

      <Footer />
    </div>
  );
};

export default AboutUs;
