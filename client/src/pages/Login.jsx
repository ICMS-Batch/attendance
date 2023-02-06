import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import useCustomToast from "../hooks/useCustomToast";
import supabase from "../supabase";
import { setStorage } from "../utils/storage";

const Login = () => {
  const { error: showError, success: showSuccess } = useCustomToast();
  const { setCurrentUser, currentUser, setProfile } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [formDetail, setFormDetail] = useState({
    email: "",
    password: "",
  });

  const handleValue = (e) => {
    setFormDetail({
      ...formDetail,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const { email, password } = formDetail;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setIsLoading(false);

    if (error) {
      showError({ message: error.message });
    } else if (data) {
      const {
        session: { access_token },
      } = data;
      setStorage("token", access_token);
      const { data: userProfile } = await supabase
        .from("profiles")
        .select("full_name, role")
        .eq("id", data.user.id)
        .single();
      setCurrentUser(data.user);
      setProfile(userProfile);
      showSuccess(
        { message: "Welcome Back" },
        {
          onCloseComplete: () => {
            navigate("/");
          },
        }
      );
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, isLoading, navigate]);

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
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={handleValue} name="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={handleValue} name="password" />
          </FormControl>
          <FormControl>
            <Button
              colorScheme="pink"
              width="full"
              onClick={handleSubmit}
              isLoading={isLoading}
              isDisabled={isLoading}
            >
              Login
            </Button>
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
