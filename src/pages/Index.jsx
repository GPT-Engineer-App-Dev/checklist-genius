// Complete the Index page component here
// Use chakra-ui
import { useState } from "react";
import { Box, Input, Button, List, ListItem, ListIcon, IconButton, Checkbox } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: input,
        isCompleted: false,
      };
      setTasks([...tasks, newTask]);
      setInput("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)));
  };

  return (
    <Box maxW="md" mx="auto" mt="10">
      <Box display="flex" mb="4">
        <Input placeholder="Add a new task" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleAddTask()} />
        <Button ml="2" colorScheme="blue" onClick={handleAddTask}>
          <FaPlus />
        </Button>
      </Box>
      <List spacing={3}>
        {tasks.map((task) => (
          <ListItem key={task.id} display="flex" alignItems="center">
            <Checkbox isChecked={task.isCompleted} onChange={() => handleToggleComplete(task.id)} mr="3" />
            <Box flex="1" as={task.isCompleted ? "s" : "span"}>
              {task.text}
            </Box>
            <IconButton icon={<FaTrash />} aria-label="Delete task" colorScheme="red" onClick={() => handleDeleteTask(task.id)} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
