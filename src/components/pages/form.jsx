import {
    React,
    useState,
} from 'react';
import {
    Button,
    TextInput,
    Group,
    Text,
    NumberInput,
    Container,
    Tooltip
} from '@mantine/core';
import { Checkbox } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Grid, FileInput, NativeSelect } from '@mantine/core';
import { Image } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { SimpleGrid } from '@mantine/core'
import '@mantine/dropzone/styles.css';
import { IconBrandSuperhuman } from '@tabler/icons-react';
import { IconAt } from '@tabler/icons-react';
import { IconRating18Plus } from '@tabler/icons-react';
import { IconSelector } from "@tabler/icons-react";
import classes from './form.module.css'
import { DateInput } from '@mantine/dates'

const MyForm = () => {

    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            age: '',
            // number: '',
            // details: '',
            checked: false,
            files: [],
            // selectedNative: '',
            droppedImages: [],

        },
        validate: {
            name: (value) => (value.length > 0 ? null : 'Name is required'),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            checked: (value) => (value ? null : 'Must agree to sell privacy'),
            age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
            // files: (value) => (value.length > 0 ? null : 'Please upload a file '),
            selectedNative: (value) => (value === '' ? 'please select a library' : null),
            droppedImages: (value) => (value.length > 0 ? null : 'please upoload a image'),
            // date: (value) => (value.)
        },
    });

    // Handle form submission
    const handleSubmit = (values) => {
        console.log('Submitted data:', values);
    };

    const [focused, setFocused] = useState(false);

    // const [value, setValue] = useState < Date | null > (null);

    return (
        <form onSubmit={form.onSubmit(handleSubmit)} >
            <Grid>
                <Grid.Col span={6} >
                    <Container className={classes.mainForm}>
                        <TextInput
                            className={classes.nameInput}
                            m={'md'}
                            label="Name"
                            radius={'md'}
                            size='md'
                            onFocus={() => {
                                setFocused(true);
                                console.log('Focused: true');
                            }}
                            onBlur={() => {
                                setFocused(false);
                                console.log('Focused: false');
                            }}
                            inputContainer={(children) => (

                                <Tooltip label="Enter your full name" position="top-start" opened={focused}>
                                    {children}
                                </Tooltip>
                            )}
                            leftSection={<IconBrandSuperhuman size={20} />}
                            placeholder="Enter your name"
                            {...form.getInputProps('name')}
                            error={form.errors.name}
                        />
                        <TextInput
                            className={classes.nameInput}
                            m={'md'}
                            label="Email"
                            radius={'md'}
                            size='md'
                            leftSection=
                            {<IconAt size={20} />}
                            placeholder="Enter your email"
                            {...form.getInputProps('email')}
                            error={form.errors.email}
                        />
                        <NumberInput
                            className={classes.nameInput}
                            m="md"
                            label="Age"
                            placeholder="Age"
                            min={0}
                            max={99}
                            leftSection={<IconRating18Plus />}
                            radius={'md'}
                            size='md'
                            {...form.getInputProps('age')}
                            error={form.errors.age}
                        />

                        {/* <FileInput
                            mt={'sm'}
                            label={'Upload files'}
                            placeholder={'GG BOIS'}
                            accept='image/png,image/jpg'
                            onChange={(files) => {
                                // console.log('Selected files:', files); 
                                form.setFieldValue('files', files.name);
                            }}
                            error={form.errors.files}
                        /> */}

                        <div>
                            <Dropzone
                                className={classes.nameInput}
                                radius={'md'}
                                size='md'
                                m={'sm'}
                                accept={IMAGE_MIME_TYPE}
                                onDrop={(droppedImages) => {
                                    form.setFieldValue('droppedImages', droppedImages);
                                }}
                                onReject={() => form.setFieldError('droppedImages', 'Selected images only')}
                            >
                                <Text ta="center">Drop Images Here</Text>
                            </Dropzone>
                            <SimpleGrid
                                className={classes.nameInput} mt={form.values.droppedImages.length > 0 ? 'xl' : 0} cols={{ base: 1, sm: 4 }}>
                                {form.values.droppedImages.map((file) => (
                                    <Image key={file.name} src={URL.createObjectURL(file)} alt={file.name} />
                                ))}
                            </SimpleGrid>
                        </div>


                    </Container>

                </Grid.Col>

                <Grid.Col span={6}>
                    <Container >


                        <NativeSelect
                            className={classes.nameInput}
                            radius={'md'}
                            size='md'
                            label={'Gender'}
                            m='sm'
                            rightSection={<IconSelector />}
                            value={form.values.selectedNative || ''}
                            data={['Please Select your gender', 'Male', 'Female', 'Shorifa']}
                            onChange={(event) => {
                                form.setFieldValue('selectedNative', event.currentTarget.value);
                                // console.log(typeof (event.currentTarget.value));
                            }
                            }
                            error={form.errors.selectedNative}
                        />

                        {/* <DateInput
                            value={value}
                            onChange={setValue}
                            label="Date input"
                            placeholder="Date input"
                        /> */}

                    </Container>

                </Grid.Col>
                <Grid.Col  >

                    <Group m="md" className={classes.mainButtonGroup} >
                        <Checkbox
                            m={'md'}
                            label="I agree to sell my rights & privacy !"
                            checked={form.values.checked}
                            {...form.getInputProps('checked')}
                            error={form.errors.checked}
                        />
                        <Button
                            className={classes.mainButton}
                            size='compact-xl'
                            radius='lg'
                            pos={'center'}
                            type="submit">Submit</Button>
                    </Group>

                </Grid.Col>
            </Grid>
            {/* {
                Object.keys(form.errors).length > 0 && (
                    <Text color="red">Please fix the errors before submitting.</Text>
                )
            } */}
        </form >
    );
};

export default MyForm;