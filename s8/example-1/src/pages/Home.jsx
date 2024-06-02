import { Box, Heading ,Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    return(
     <Box>
           <Heading as='h1' size='xl'>
                Home Page
          </Heading>
          
     </Box>
    );
}