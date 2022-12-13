import { Input, Button, Form } from './SearchForm.styled';

interface IProps {
  onSubmit: (query: string) => void;
}

export default function SearchForm({ onSubmit }: IProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = e.target as typeof e.target & {
      film: { value: string };
    };

    onSubmit(value.film.value);
    e.currentTarget.reset();
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Input type="text" name="film" />
      <Button type="submit">Search</Button>
    </Form>
  );
}
