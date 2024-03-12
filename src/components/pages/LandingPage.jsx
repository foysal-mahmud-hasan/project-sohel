import { Title } from '@mantine/core';
const LandingPage = () => {

    return (

        <main  >
            <Title c="red">Home</Title>
            {/* Your landing page content goes here */}
            <section>
                {/* Hero section */}
                <h1>Hello World! , Welcome to my Matine app!</h1>
                <p>This is the landing page . please press the buttons on the navbar to navigate</p>
            </section>
            <section>
                {/* Additional sections as needed */}
                <h2>List of functionalities</h2>
                <p>1. Used Mantine AppShell <br />
                    2. Used React router dom to navigate <br />
                    3. Used validation on form .
                </p>
            </section>

        </main>
    )
}

export default LandingPage