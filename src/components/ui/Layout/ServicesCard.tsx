import { HeartIcon, Star, VerifiedIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "../card";
import { Button } from "../button";
import { ToggleGroup, ToggleGroupItem } from "../toggle-group";

export default function ServicersCard() {
  return (
    <div className="flex flex-col gap-3 pb-25">
      <Card>
        <CardContent className="flex flex-col gap-3">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  src="https://github.com/maxleiter.png"
                  alt="@maxleiter"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              John Doe
              <VerifiedIcon className="text-lightblue" />
            </div>
            <p className="flex items-center gap-1">
              5.0 <Star className="text-yellow-400" />
            </p>
          </CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            officiis, quod harum veritatis molestiae doloribus explicabo
            laudantium ducimus
          </CardDescription>
          <CardFooter className="flex items-center justify-center px-5 gap-4">
            <Button className="bg-lightblue w-full cursor-pointer hover:bg-lightblue">
              Entrar em contato
            </Button>
            <ToggleGroup type="single">
              <ToggleGroupItem
                value="heart"
                aria-label="Toggle heart"
                className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500 p-0 cursor-pointer focus:bg-transparent hover:bg-transparent"
              >
                <HeartIcon />
              </ToggleGroupItem>
            </ToggleGroup>
          </CardFooter>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col gap-3">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  src="https://github.com/maxleiter.png"
                  alt="@maxleiter"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              John Doe
              <VerifiedIcon className="text-lightblue" />
            </div>
            <p className="flex items-center gap-1">
              5.0 <Star className="text-yellow-400" />
            </p>
          </CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            officiis, quod harum veritatis molestiae doloribus explicabo
            laudantium ducimus
          </CardDescription>
          <CardFooter className="flex items-center justify-center px-5 gap-4">
            <Button className="bg-lightblue w-full cursor-pointer hover:bg-lightblue">
              Entrar em contato
            </Button>
            <ToggleGroup type="single">
              <ToggleGroupItem
                value="heart"
                aria-label="Toggle heart"
                className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500 p-0 cursor-pointer focus:bg-transparent hover:bg-transparent"
              >
                <HeartIcon />
              </ToggleGroupItem>
            </ToggleGroup>
          </CardFooter>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex flex-col gap-3">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  src="https://github.com/maxleiter.png"
                  alt="@maxleiter"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
              John Doe
              <VerifiedIcon className="text-lightblue" />
            </div>
            <p className="flex items-center gap-1">
              5.0 <Star className="text-yellow-400" />
            </p>
          </CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            officiis, quod harum veritatis molestiae doloribus explicabo
            laudantium ducimus
          </CardDescription>
          <CardFooter className="flex items-center justify-center px-5 gap-4">
            <Button className="bg-lightblue w-full cursor-pointer hover:bg-lightblue">
              Entrar em contato
            </Button>
            <ToggleGroup type="single">
              <ToggleGroupItem
                value="heart"
                aria-label="Toggle heart"
                className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-red-500 data-[state=on]:*:[svg]:stroke-red-500 p-0 cursor-pointer focus:bg-transparent hover:bg-transparent"
              >
                <HeartIcon />
              </ToggleGroupItem>
            </ToggleGroup>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
}
