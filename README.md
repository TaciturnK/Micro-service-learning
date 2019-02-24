# SpringCloud微服务学习笔记

项目地址： https://github.com/TaciturnK/Micro-service-learning

## 单体架构(Monolithic架构)

![](https://i.imgur.com/9mOffeI.png)

 

**Monolithic比较适合小项目**

### 单体架构优点：

- 开发简单直接，集中式管理,     基本不会重复开发功能都在本地，没有分布式的管理开销和调用开销。 

### 单体架构缺点：

- 开发效率低：所有的开发在一个项目改代码，递交代码相互等待，代码冲突不断
- 代码维护难：代码功能耦合在一起，新人不知道何从下手
- 部署不灵活：构建时间长，任何小修改必须重新构建整个项目，这个过程往往很长
- 稳定性不高：一个微不足道的小问题，可以导致整个应用挂掉
- 扩展性不够：无法满足高并发情况下的业务需求

## 微服务架构 

​       微服务是指开发一个单个小型的但有业务功能的服务，每个服务都有自己的处理和轻量通讯机制，可以部署在单个或多个服务器上。微服务也指一种种松耦合的、有一定的有界上下文的面向服务架构。也就是说，如果每个服务都要同时修改，那么它们就不是微服务，因为它们紧耦合在一起；如果你需要掌握一个服务太多的上下文场景使用条件，那么它就是一个有上下文边界的服务，这个定义来自DDD领域驱动设计。

​       微服务架构模式（MicroservicesArchitecture Pattern）的目的是将大型的、复杂的、长期运行的应用程序构建为一组相互配合的服务，每个服务都可以很容易得局部改良。Micro这个词意味着每个服务都应该足够小，但是，这里的小不能用代码量来比较，而应该是从业务逻辑上比较——符合SRP原则的才叫微服务。

![](https://i.imgur.com/UaYIwob.png)

 

相对于单体架构和SOA，它的主要特点是组件化、松耦合、自治、去中心化，体现在以下几个方面：

- 一组小的服务 
        服务粒度要小，而每个服务是针对一个单一职责的业务能力的封装，专注做好一件事情。
- 独立部署运行和扩展 
            每个服务能够独立被部署并运行在一个进程内。这种运行和部署方式能够赋予系统灵活的代码组织方式和发布节奏，使得快速交付和应对变化成为可能。
- 独立开发和演化 
       技术选型灵活，不受遗留系统技术约束。合适的业务问题选择合适的技术可以独立演化。服务与服务之间采取与语言无关的API进行集成。相对单体架构，微服务架构是更面向业务创新的一种架构模式。
- 独立团队和自治 
            团队对服务的整个生命周期负责，工作在独立的上下文中，自己决策自己治理，而不需要统一的指挥中心。团队和团队之间通过松散的社区部落进行衔接。

​       我们可以看到整个微服务的思想就如我们现在面对信息爆炸、知识爆炸是一样的：通过解耦我们所做的事情，分而治之以减少不必要的损耗，使得整个复杂的系统和组织能够快速的应对变化。

 

### 微服务优点

- 每个微服务都很小，这样能聚焦一个指定的业务功能或业务需求。 
- 微服务能够被小团队单独开发，这个小团队是2到5人的开发人员组成。     
- 微服务是松耦合的，是有功能意义的服务，无论是在开发阶段或部署阶段都是独立的。     
- 微服务能使用不同的语言开发。 
- 微服务允许容易且灵活的方式集成自动部署，通过持续集成工具，如Jenkins,     bamboo 。 
- 一个团队的新成员能够更快投入生产。 
- 微服务易于被一个开发人员理解，修改和维护，这样小团队能够更关注自己的工作成果。无需通过合作才能体现价值。     
- 微服务允许你利用融合最新技术。 
- 微服务只是业务逻辑的代码，不会和HTML,CSS     或其他界面组件混合。 
- 微服务能够即时被要求扩展。 
- 微服务能部署中低端配置的服务器上。 
- 易于和第三方集成。 
- 每个微服务都有自己的存储能力，可以有自己的数据库。也可以有统一数据库。     

### 微服务架构的缺点

- 微服务架构可能带来过多的操作。 
- 需要DevOps技巧 (<http://en.wikipedia.org/wiki/DevOps>). 
- 可能双倍的努力。 
- 分布式系统可能复杂难以管理。 
- 因为分布部署跟踪问题难。 
- 当服务数量增加，管理复杂性增加。 

## 技术介绍

### 服务注册中心：Eureka

> Eureka是Spring Cloud Netflix微服务套件中的一部分，可以与Springboot构建的微服务很容易的整合起来。
>
> > Eureka包含了服务器端和客户端组件。
> >
> > 服务器端，也被称作是服务注册中心，用于提供服务的注册与发现。Eureka支持高可用的配置，当集群中有分片出现故障时，Eureka就会转入自动保护模式，它允许分片故障期间继续提供服务的发现和注册，当故障分片恢复正常时，集群中其他分片会把他们的状态再次同步回来。
> >
> > 客户端组件包含服务消费者与服务生产者。在应用程序运行时，Eureka客户端向注册中心注册自身提供的服务并周期性的发送心跳来更新它的服务租约。同时也可以从服务端查询当前注册的服务信息并把他们缓存到本地并周期性的刷新服务状态。

![1. 服务注册于发现.png](https://upload-images.jianshu.io/upload_images/3269064-d827649210f22655.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

参考：

https://www.cnblogs.com/demodashi/p/8509931.html

https://www.cnblogs.com/snowjeblog/p/8821325.html



作为服务注册中心，Eureka比Zookeeper好在哪里

> 著名的CAP理论指出，一个分布式系统不可能同时满足C(一致性)、A(可用性)和P(分区容错性)。由于分区容错性在是分布式系统中必须要保证的，因此我们只能在A和C之间进行权衡。**在此Zookeeper保证的是CP, 而Eureka则是AP**。
>
> ## Zookeeper保证CP
>
> 当向注册中心查询服务列表时，我们可以容忍注册中心返回的是几分钟以前的注册信息，但不能接受服务直接down掉不可用。也就是说，服务注册功能对可用性的要求要高于一致性。但是zk会出现这样一种情况，当master节点因为网络故障与其他节点失去联系时，剩余节点会重新进行leader选举。问题在于，选举leader的时间太长，30  ~ 120s,  且选举期间整个zk集群都是不可用的，这就导致在选举期间注册服务瘫痪。在云部署的环境下，因网络问题使得zk集群失去master节点是较大概率会发生的事，虽然服务能够最终恢复，但是漫长的选举时间导致的注册长期不可用是不能容忍的。
>
> 
>
> ## Eureka保证AP
>
> Eureka看明白了这一点，因此在设计时就优先保证可用性。Eureka各个节点都是平等的，几个节点挂掉不会影响正常节点的工作，剩余的节点依然可以提供注册和查询服务。而Eureka的客户端在向某个Eureka注册或时如果发现连接失败，则会自动切换至其它节点，只要有一台Eureka还在，就能保证注册服务可用(保证可用性)，只不过查到的信息可能不是最新的(不保证强一致性)。除此之外，Eureka还有一种自我保护机制，如果在15分钟内超过85%的节点都没有正常的心跳，那么Eureka就认为客户端与注册中心出现了网络故障，此时会出现以下几种情况：  
>
> 1. Eureka不再从注册列表中移除因为长时间没收到心跳而应该过期的服务 
> 2. Eureka仍然能够接受新服务的注册和查询请求，但是不会被同步到其它节点上(即保证当前节点依然可用) 
> 3. 当网络稳定时，当前实例新的注册信息会被同步到其它节点中
>
> 因此， Eureka可以很好的应对因网络故障导致部分节点失去联系的情况，而不会像zookeeper那样使整个注册服务瘫痪。



### 声明式客户端访问：Fegin

​	Feign是一个声明式的伪Http客户端，它使得写Http客户端变得更简单。使用Feign，只需要创建一个接口并用注解的方式来配置它，即可完成对服务提供方的接口绑定，简化了在使用Ribbon时自行封装服务调用客户端的开发量。

​	Feign具有可插拔的注解特性，包括Feign 注解和JAX-RS注解，同时也扩展了对SpringMVC的注解支持。Feign支持可插拔的编码器和解码器，默认集成了Ribbon，并和Eureka结合，默认实现了负载均衡的效果。

主要功能：简化服务消费者调用服务提供者接口



参考：https://www.cnblogs.com/senlinyang/p/8595489.html



### 客户端负载均衡：Ribbon

​	Ribbon是Netflix发布的负载均衡器，它有助于控制HTTP和TCP的客户端的行为。为Ribbon配置服务提供者地址后，Ribbon就可基于某种负载均衡算法，自动地帮助服务消费者去请求。Ribbon默认为我们提供了很多负载均衡算法，例如轮询、随机等。当然，我们也可为Ribbon实现自定义的负载均衡算法。

​	在Spring Cloud中，当Ribbon与Eureka配合使用时，Ribbon可自动从Eureka Server获取服务提供者地址列表，并基于负载均衡算法，请求其中一个服务提供者实例。展示了Ribbon与Eureka配合使用时的架构。

![img](https://img-blog.csdn.net/20180616090520708?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NoZW5ncWl1bWluZw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)



参考：https://blog.csdn.net/chengqiuming/article/details/80711168

### 服务断路器：Hystrix

所谓的熔断机制和日常生活中见到电路保险丝是非常相似的，当出现了问题之后，保险丝会自动烧断，以保护我们的电器， 那么如果换到了程序之中呢？

当现在服务的提供方出现了问题之后整个的程序将出现错误的信息显示，而这个时候如果不想出现这样的错误信息，而希望替换为一个错误时的内容。

![img](https://images2018.cnblogs.com/blog/1227483/201804/1227483-20180415134502465-861895697.png)

**一个服务挂了后续的服务跟着不能用了，这就是雪崩效应**

 对于熔断技术的实现需要考虑以下几种情况：

- 出现错误之后可以 fallback 错误的处理信息；

-  如果要结合 Feign 一起使用的时候还需要在 Feign（客户端）进行熔断的配置。

**Hystrix如何解决依赖隔离**

- Hystrix使用命令模式HystrixCommand(Command)包装依赖调用逻辑，每个命令在单独线程中/信号授权下执行。
- 可配置依赖调用超时时间,超时时间一般设为比99.5%平均时间略高即可.当调用超时时，直接返回或执行fallback逻辑。
- 为每个依赖提供一个小的线程池（或信号），如果线程池已满调用将被立即拒绝，默认不采用排队.加速失败判定时间。
- 依赖调用结果分:成功，失败（抛出异常），超时，线程拒绝，短路。 请求失败(异常，拒绝，超时，短路)时执行fallback(降级)逻辑。
- 提供熔断器组件,可以自动运行或手动调用,停止当前依赖一段时间(10秒)，熔断器默认错误率阈值为50%,超过将自动运行。
- 提供近实时依赖的统计和监控

Hystrix依赖的隔离架构,如下图:

![img](http://dl2.iteye.com/upload/attachment/0103/1043/8db93de3-db14-355f-ac70-16d06481b020.png)

参考：https://www.cnblogs.com/leeSmall/p/8847652.html

https://www.cnblogs.com/yepei/p/7169127.html

### 微服务网关：Zuul

zuul 是netflix开源的一个API Gateway 服务器, 本质上是一个web servlet应用。

Zuul 在云平台上提供动态路由，监控，弹性，安全等边缘服务的框架。Zuul 相当于是设备和 Netflix 流应用的 Web 网站后端所有请求的前门。

**zuul的工作原理**

zuul的核心是一系列的**filters**, 其作用可以类比Servlet框架的Filter，或者AOP。

zuul把Request route到 用户处理逻辑 的过程中，这些filter参与一些过滤处理，比如Authentication，Load Shedding等。 

![img](https://images2015.cnblogs.com/blog/486074/201702/486074-20170220185335288-1703224333.png)

**Zuul提供了一个框架，可以对过滤器进行动态的加载，编译，运行。**

Zuul的过滤器之间没有直接的相互通信，他们之间通过一个RequestContext的静态类来进行数据传递的。RequestContext类中有ThreadLocal变量来记录每个Request所需要传递的数据。

Zuul的过滤器是由Groovy写成，这些过滤器文件被放在Zuul Server上的特定目录下面，Zuul会定期轮询这些目录，修改过的过滤器会动态的加载到Zuul Server中以便过滤请求使用。

下面有几种标准的过滤器类型：

Zuul大部分功能都是通过过滤器来实现的。Zuul中定义了四种标准过滤器类型，这些过滤器类型对应于请求的典型生命周期。

(1) PRE：这种过滤器在请求被路由之前调用。我们可利用这种过滤器实现身份验证、在集群中选择请求的微服务、记录调试信息等。

(2) ROUTING：这种过滤器将请求路由到微服务。这种过滤器用于构建发送给微服务的请求，并使用Apache HttpClient或Netfilx Ribbon请求微服务。

(3) POST：这种过滤器在路由到微服务以后执行。这种过滤器可用来为响应添加标准的HTTP Header、收集统计信息和指标、将响应从微服务发送给客户端等。

(4) ERROR：在其他阶段发生错误时执行该过滤器。



参考：https://www.cnblogs.com/lexiaofei/p/7080257.html

https://www.cnblogs.com/xd03122049/p/6036318.html





## 项目实际测试

### 基本微服务测试

- 启动微服务注册中心Eureka：microservice-discovery-eureka  账户：admin  密码：admin123

  访问注册中心地址：http://127.0.0.1:8761/

- 启动服务提供者：microservice-provider-user  

- 启动服务消费者：microservice-consume-movie

- 打开注册中心检查服务是否注册

- 访问消费者接口1：http://127.0.0.1:9100/say   此时没有进行服务间的调用，只是单纯的访问服务消费者

- 访问消费者接口2：http://127.0.0.1:9100/say2  此时消费者调用提供者，进行服务间的通讯，此时服务请求没有参数并且返回数据为字符串

- 访问消费者接口3：http://127.0.0.1:9100/getUserInfo/1  此时进行服务间通讯，并且请求带有参数返回数据为对象

### 客户端负载均衡服务测试

- 启动微服务注册中心Eureka：microservice-discovery-eureka  账户：admin  密码：admin123

  访问注册中心地址：http://127.0.0.1:8761/

- 启动服务提供者：microservice-provider-user1 

- 启动服务提供者：microservice-provider-user2  

- 启动服务消费者：microservice-consume-movie-feign



### 测试Hystrix熔断机制

- 启动Eureka注册中心：microservice-discovery-eureka
- 启动服务提供者：microservice-provider-user
- 启动服务消费者： microservice-consume-movie-feign-hystrix  其中包括Hystrix熔断机制的方法回退



### 测试Hystrix熔断控制面板

- 启动Eureka注册中心：microservice-discovery-eureka
- 启动服务提供者：microservice-provider-user
- 启动服务消费者： microservice-consume-movie-feign-hystrix  其中包括Hystrix熔断机制的方法回退
  注意：此项目必须要确保被监控的服务打开了Actuator（依赖spring-boot-starter-actuator），
  启动程序开启了断路器（@EnableCircuitBreaker注解）。
- 启动Hystrix DashBoard监控项目： microservice-hystrix-dashboard  
  注意：此项目无需注册到Eureka中
- 访问注册中心： http://127.0.0.1:8761/  检查服务是否启动
- 访问服务消费者： http://127.0.0.1:9103/say2
- 访问监控面板： http://127.0.0.1:9090/hystrix
   填写相应参数:http://127.0.0.1:9103/hystrix.stream

### 测试：路由规则


- 启动服务注册中心项目：microservice-discovery-eureka
- 启动服务提供者项目：microservice-provider-user
- 启动服务消费者项目：microservice-consume-movie-ribbon
- 启动路由网关项目： microservice-getway-zuul
- 访问：http://127.0.0.1:8761/  检查服务是否启动成功
- 访问：http://127.0.0.1:8040/microservice-consume-movie-ribbon/say2   检查服务是否成功
- 访问：http://127.0.0.1:8040/microservice-provider-user/getUser   检查服务是否成功

**Zuul路由规则：http://ZUUL_HOST:ZUUL_PORT/微服务在Eureka上的serviceId/**会被转发到serviceId对应的微服务上**


### 测试：负载均衡功能

- 启动服务注册中心：microservice-discovery-eureka
- 启动多个服务提供者：microservice-provider-user(端口不同)
- 启动路由网关项目：microservice-getway-zuul
- 访问：http://127.0.0.1:8761/  检查服务是否启动成功


多次访问192.168.224.1:8040/microservice-provider-user/hello，会发现两个服务提供者循环显示，说明Zuul可以使用Ribbon达到负载均衡的效果

### 测试：Hystrix容错与监控功能
1. 启动服务注册中心项目：microservice-discovery-eureka
2. 启动服务提供者项目：microservice-provider-user
3. 启动服务消费者项目：microservice-consume-movie-ribbon
4. 启动路由网关项目： microservice-getway-zuul
5. 启动服务监控项目： microservice-hystrix-dashboard
6. 访问：http://127.0.0.1:8761/  检查服务是否启动成功
7. 访问：192.168.224.1:8040/microservice-consume-movie-feign-hystrix3/say2 获得预期效果
8. 访问服务监控：http://127.0.0.1:9090/hystrix  输入：http://192.168.224.1:8040/hystrix.stream(网关地址)，结果显示