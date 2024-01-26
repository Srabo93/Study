<?php

namespace Armin\Php\Builder;

interface SQLQueryBuilder
{
    /**
     * @param array<int,mixed> $fields
     */
    public function select(string $table, array $fields): SQLQueryBuilder;

    public function where(string $field, string $value, string $operator = "="): SQLQueryBuilder;

    public function limit(int $start, int $offset): SQLQueryBuilder;
    public function getSQL(): string;
}
