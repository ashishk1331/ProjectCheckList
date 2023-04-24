import Button from "./Button";
import { formatDistance, subDays } from "date-fns";
import Image from "next/image";

export default function Header(props) {

    return (
        <header className="flex flex-wrap items-center gap-3 mt-36 md:mt-24">
            <Image
                src={props.icon}
                width={520}
                height={520}
                alt="Rocklee"
                className="rounded-full w-28 md:w-48 h-28 md:h-48 aspect-square border-white border-4 bg-green"
            />
            <div className="flex flex-col order-last w-full sm:w-fit sm:order-none items-left gap-1 mt-auto mb-1">
                <h1 className="text-4xl font-bold uppercase tracking-wider">{
                    props.user ? props.user.email.substring(0, props.user.email.indexOf('@')) : props.title
                }</h1>
                <p>
                    last edited
                    {" "}
                    {formatDistance(new Date(), new Date(props.editedAt), {
                        addSuffix: true,
                    })}
                </p>
            </div>
        </header>
    );
}
