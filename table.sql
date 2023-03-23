
-- Foi usado o MySQL Workbench para popular a tabela de forma direta usando o arquivo extensão csv

create table Case_pokemon(
		Line integer,
        Name VARCHAR(255) NOT NULL,
        Pokedex_number bigint,
        Img_name VARCHAR(255) default null,
        Generation integer,
        Evolution_stage varchar(255) default null,
        Evolved integer,
        Family_id varchar(255) default null,
        Cross_gen integer,
        Type_1 VARCHAR(255),
        Type_2 VARCHAR(255) default null ,
        Weather_1 VARCHAR(255),
        Weather_2 VARCHAR(255) default null ,
        STAT_TOTAL bigint ,
        ATK bigint,
        DEF bigint,
        STA bigint,
        Legendary integer,
        Aquireable INT ,
        Spawns integer ,
        Regional integer,
        Raidable integer,
        Hatchable integer,
        Shiny integer,
        Nest integer,
        New integer,
        Not_gettable integer,
        Future_evolve bigint,
        100_cp_40 bigint,
        100_cp_39 bigint

)