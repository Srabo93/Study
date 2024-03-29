<?php

namespace Armin\Php\Builder;

class PostgresQueryBuilder extends MysqlQueryBuilder
{
    // override functions
    public function limit(int $start, int $offset): SQLQueryBuilder
    {
        /*
         * parent::limit reuses the error checking functionality and then reset the query
         * for more maintainability and clearity its better to rewrite the function instead calling parent functions
        */

        parent::limit($start, $offset);

        $this->query->limit = " LIMIT " . $start . " OFFSET " . $offset;

        return $this;
    }

}
