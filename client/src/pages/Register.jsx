import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import supabase from "../supabase";
const Register = () => {
  const showToast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [semesters, setSemesters] = useState([]);

  const [formDetail, setFormDetail] = useState({
    full_name: "",
    email: "",
    password: "",
    sem_id: "",
  });

  const handleSubmit = async () => {
    setIsLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: formDetail.email,
      password: formDetail.password,
      options: {
        data: { ...formDetail, sem_id: Number(formDetail.sem_id) },
      },
    });

    setIsLoading(false);

    if (error) {
      showToast({
        isClosable: true,
        title: "Registration error",
        description: error.message,
        status: "error",
        position: "top-right",
      });
    } else if (data) {
      showToast({
        isClosable: true,
        title: "Registration success",
        description: "Please check your email for verification link",
        status: "success",
        position: "top-right",
      });
    }
  };

  const handleValue = (e) => {
    setFormDetail({
      ...formDetail,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const getSemesters = async () => {
      const { data, error } = await supabase
        .from("semesters")
        .select("name, id");
      if (data) {
        setSemesters(data);
      } else if (error) {
        showToast({
          isClosable: true,
          title: "Semester fetch error",
          description: error.message,
          status: "error",
          position: "top-right",
        });
      }
    };
    getSemesters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Flex justifyContent="center">
      <Flex
        padding="5"
        height="100vh"
        width={{
          xs: "full",
          xl: "lg",
        }}
        alignItems="center"
      >
        <Flex
          flexDirection="column"
          height="max-content"
          gap="10"
          width="full"
          justifyContent="center"
          shadow="md"
          borderRadius="sm"
          padding="10"
        >
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input type="text" onChange={handleValue} name="full_name" />
          </FormControl>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={handleValue} name="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={handleValue} name="password" />
          </FormControl>
          <FormControl>
            <FormLabel>Semester</FormLabel>
            <Select
              placeholder="Select Semester"
              name="sem_id"
              onChange={handleValue}
            >
              {semesters.map((semester, index) => (
                <option value={semester.id} key={index}>
                  {semester.name}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <Button
              colorScheme="pink"
              width="full"
              onClick={handleSubmit}
              isLoading={isLoading}
              isDisabled={isLoading}
            >
              Register
            </Button>
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Register;
