import { Typography } from '@mui/material';
import Avatar  from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button  from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid  from '@mui/material/Grid';
import { TextInput } from '../components/TextField';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const ContactWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 8, 0),
}))


const ContactHeader = styled(Typography)(({ theme }) => ({
    margin: theme.spacing(1, 0),
}))

function ContactPage() {

    const [state, setState] = useState({data: {
        name: "",
        email: "",
        message: ""
    },
    errors: {} 
    })

    const handleOnChange = ({ target }) => {
        const { data, errors} = state
        target.value.length <= 3
            ? (errors[target.name] = `${target.name} must have at least 3 letters`)
            : (errors[target.name] = "")
        data[target.name] = target.value
        setState({ data, errors })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted, ", state.data)
    }

    return(
        <ContactWrapper>
            <Container>
                <Grid container spacing={1}>
                    <Grid item sm={5}>
                        <Box >
                            <Avatar sx={{width: "100%", height: "auto"}} src='https://gothunderbirds.ca/images/2019/1/28/van_den_Brink_Patrick_18.jpg?' />
                        </Box>
                    </Grid >
                    <Grid item xs={12} sm={7}>
                        <form onSubmit={handleSubmit}>
                        <Grid
                                container
                                direction='row'
                                justifyContent='center'
                                alignItems='center'
                            >
                                <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                                    <ContactHeader variant='h5' >                                
                                        Interrested in reaching out? Do not hesiatate to submit the email form below! 
                                    </ContactHeader>
                                </Grid>

                                <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                                    <TextInput label={'Name'} name={'name'} state={state} onChange={handleOnChange} />
                                </Grid>
                                
                                <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                                    <TextInput label={'Email'} name={'email'} state={state} onChange={handleOnChange} />
                                </Grid>
                                
                                <Grid item xs={12} sm={10} style={{ marginBottom: "16px" }}>
                                    <TextInput label={'Message'} name={'message'} state={state} onChange={handleOnChange} multiline={true} rows={5} />
                                </Grid>
                                
                                <Grid item xs={12} sm={8} style={{ marginBottom: "16px" }}>
                                    <Button
                                        variant="contained"
                                        type='submit'
                                        fullWidth={true}>
                                            Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </ContactWrapper>
    )
}

export default ContactPage;