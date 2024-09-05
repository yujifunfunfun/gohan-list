import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";

import { List } from "../components/pages/List";
import { Create } from "../components/pages/Create";
import { Detail } from "../components/pages/Detail";
import { Edit } from "../components/pages/Edit";

export const Router: FC = memo(() => {
    return (
        <Routes>
            <Route path="/list" element={<List />} />
            <Route path="/create" element={<Create />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/edit" element={<Edit />} />
        </Routes>
    );
});
