<?php

namespace Armin\Php\Builder;

require 'vendor/autoload.php';

function clientCode(SQLQueryBuilder $queryBuilder)
{
    $query = $queryBuilder->select("users", ["name","email","password"])->where("age", 18, ">")->where("age", 30, "<")->limit(10, 20)->getSQL();

    echo $query;
}


echo "Testing MySQL query builder: \n";

clientCode(new MysqlQueryBuilder());

echo"\n\n";

echo "Testing PostgresSQL query builder:\n";
clientCode(new PostgresQueryBuilder());
